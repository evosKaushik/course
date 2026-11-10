import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

interface Note {
  _id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

function getErrorMessage(err: unknown) {
  if (err instanceof TypeError) {
    return `Could not reach the server at ${API_URL}. Make sure the backend is running.`
  }
  return err instanceof Error ? err.message : 'Something went wrong'
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    fetch(`${API_URL}/api/notes`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load notes')
        return res.json() as Promise<Note[]>
      })
      .then((data) => setNotes(data))
      .catch((err: unknown) => setError(getErrorMessage(err)))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (!notice) return
    const timer = setTimeout(() => setNotice(''), 2500)
    return () => clearTimeout(timer)
  }, [notice])

  const filteredNotes = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return notes
    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query),
    )
  }, [notes, search])

  function resetForm() {
    setTitle('')
    setContent('')
    setEditingId(null)
    setError('')
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim() || !content.trim()) {
      setError('Please fill in both title and content')
      return
    }

    const wasEditing = Boolean(editingId)

    try {
      setSaving(true)
      setError('')

      const res = await fetch(
        editingId ? `${API_URL}/api/notes/${editingId}` : `${API_URL}/api/notes`,
        {
          method: editingId ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, content }),
        },
      )

      if (!res.ok) throw new Error('Failed to save note')
      const saved: Note = await res.json()

      setNotes((prev) =>
        wasEditing
          ? prev.map((note) => (note._id === saved._id ? saved : note))
          : [saved, ...prev],
      )
      resetForm()
      setNotice(wasEditing ? 'Note updated' : 'Note added')
    } catch (err) {
      setError(getErrorMessage(err))
    } finally {
      setSaving(false)
    }
  }

  function handleEdit(note: Note) {
    setEditingId(note._id)
    setTitle(note.title)
    setContent(note.content)
    setError('')
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    formRef.current?.querySelector('input')?.focus()
  }

  async function handleDelete(id: string) {
    if (!window.confirm('Delete this note? This cannot be undone.')) return

    try {
      setError('')
      const res = await fetch(`${API_URL}/api/notes/${id}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Failed to delete note')

      setNotes((prev) => prev.filter((note) => note._id !== id))
      if (editingId === id) resetForm()
      setNotice('Note deleted')
    } catch (err) {
      setError(getErrorMessage(err))
    }
  }

  return (
    <main className="app">
      <header className="app-header">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M8 3.5h8a2 2 0 0 1 2 2V19a1.5 1.5 0 0 1-2.25 1.3L12 18l-3.75 2.3A1.5 1.5 0 0 1 6 19V5.5a2 2 0 0 1 2-2Z"
              />
              <path
                strokeLinecap="round"
                strokeWidth="1.8"
                d="M9 8h6M9 11.5h6"
              />
            </svg>
          </div>
          <div>
            <h1>My Notes</h1>
            <p>Capture ideas, tasks and everything in between.</p>
          </div>
        </div>

        <div className="stats" aria-label={`${notes.length} notes`}>
          <strong>{notes.length}</strong>
          <span>{notes.length === 1 ? 'note' : 'notes'}</span>
        </div>
      </header>

      <div className="layout">
        <aside className="panel">
          <form className="note-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-header">
              <h2>{editingId ? 'Edit note' : 'New note'}</h2>
              <span className={editingId ? 'badge editing' : 'badge'}>
                {editingId ? 'Editing' : 'Draft'}
              </span>
            </div>

            <label className="field" htmlFor="note-title">
              <span className="field-label">
                Title <em>{title.length}/120</em>
              </span>
              <input
                id="note-title"
                type="text"
                placeholder="Give your note a title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={120}
              />
            </label>

            <label className="field" htmlFor="note-content">
              <span className="field-label">
                Content <em>{content.length}/2000</em>
              </span>
              <textarea
                id="note-content"
                placeholder="Write something worth remembering..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={(e) => {
                  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                    e.preventDefault()
                    e.currentTarget.form?.requestSubmit()
                  }
                }}
                maxLength={2000}
                rows={6}
              />
            </label>

            {error && (
              <p className="error" role="alert">
                {error}
              </p>
            )}

            <div className="form-actions">
              <button type="submit" className="primary" disabled={saving}>
                {saving ? 'Saving...' : editingId ? 'Update note' : 'Add note'}
              </button>
              <button
                type="button"
                className="secondary"
                onClick={resetForm}
                disabled={saving || (!title && !content && !editingId)}
              >
                {editingId ? 'Cancel' : 'Clear'}
              </button>
            </div>

            <p className="hint">
              Tip: press <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to save quickly.
            </p>
          </form>
        </aside>

        <section className="notes-section">
          <div className="notes-toolbar">
            <div>
              <h2>All notes</h2>
              <p className="muted">
                {search
                  ? `${filteredNotes.length} result${
                      filteredNotes.length === 1 ? '' : 's'
                    }`
                  : 'Everything you have written so far'}
              </p>
            </div>

            <div className="search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="7" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m20 20-3.5-3.5"
                />
              </svg>
              <input
                type="search"
                placeholder="Search notes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search notes"
              />
            </div>
          </div>

          {loading ? (
            <ul className="notes-grid" aria-label="Loading notes">
              {[0, 1, 2].map((item) => (
                <li key={item} className="note-card skeleton">
                  <span className="skeleton-line short" />
                  <span className="skeleton-line" />
                  <span className="skeleton-line" />
                  <span className="skeleton-line medium" />
                </li>
              ))}
            </ul>
          ) : notes.length === 0 ? (
            <div className="empty-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 3.5h8a2 2 0 0 1 2 2V19a1.5 1.5 0 0 1-2.25 1.3L12 18l-3.75 2.3A1.5 1.5 0 0 1 6 19V5.5a2 2 0 0 1 2-2Z"
                />
                <path
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M9 8h6M9 11.5h4"
                />
              </svg>
              <h3>No notes yet</h3>
              <p>Your first idea is one line away. Add a note to get started.</p>
            </div>
          ) : filteredNotes.length === 0 ? (
            <div className="empty-state">
              <h3>No matches found</h3>
              <p>Nothing matches “{search}”. Try a different keyword.</p>
              <button
                type="button"
                className="secondary"
                onClick={() => setSearch('')}
              >
                Clear search
              </button>
            </div>
          ) : (
            <ul className="notes-grid">
              {filteredNotes.map((note) => (
                <li key={note._id} className="note-card">
                  <div className="note-top">
                    <h3>{note.title}</h3>
                    <time dateTime={note.createdAt}>
                      {formatDate(note.createdAt)}
                    </time>
                  </div>
                  <p className="note-content">{note.content}</p>
                  <div className="note-footer">
                    <span className="note-meta">
                      {note.updatedAt !== note.createdAt ? 'Edited' : 'Created'}
                    </span>
                    <div className="note-actions">
                      <button
                        type="button"
                        className="icon-button"
                        onClick={() => handleEdit(note)}
                        aria-label={`Edit ${note.title}`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="m14.5 5.5 4 4M4 20l1-5L16 4a2.8 2.8 0 0 1 4 4L9 19l-5 1Z"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="icon-button danger"
                        onClick={() => handleDelete(note._id)}
                        aria-label={`Delete ${note.title}`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M4 7h16M9 7V5h6v2M7 7l1 13h8l1-13M10 11v5M14 11v5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {notice && (
        <div className="toast" role="status">
          {notice}
        </div>
      )}
    </main>
  )
}

export default App
