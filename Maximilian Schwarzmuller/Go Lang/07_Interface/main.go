package main

import (
	"bufio"
	"errors"
	"fmt"
	"os"
	"strings"

	"example.com/notes/note"
	"example.com/notes/todo"
)

type saver interface {
	Save() error
}

func main() {
	fmt.Println("Welcome to notes taking app")

	title, content, err := getNoteData()
	todoText, err := getUserInput("Todo text: ")

	todo, err := todo.New(todoText)
	if err != nil {
		fmt.Println(err)
		return
	}
	todo.Display()

	err = saveData(todo)

	if err != nil {
		return
	}


	userNote, err := note.New(title, content)
	if err != nil {
		fmt.Println(err)
		return
	}

	// Display Notes in Stdout
	userNote.Display()

	// Write in file
	err = saveData(userNote)

	if err != nil {
		return
	}

}

func saveData(data saver) error {
	err := data.Save()

	if err != nil {
		fmt.Println("Saving the note failed.")
		return err
	}

	fmt.Println("Saving the note succeeded!")
	return nil
}

func getNoteData() (string, string, error) {
	title, err := getUserInput("Note Title: ")
	if err != nil {
		return "", "", err
	}

	content, err := getUserInput("Note content: ")

	if err != nil {
		fmt.Println(err)
		return "", "", err
	}

	return title, content, nil
}

func getUserInput(prompt string) (text string, err error) {
	fmt.Printf("%v ", prompt)
	// fmt.Scanln(&value)
	reader := bufio.NewReader(os.Stdin)

	text, err = reader.ReadString('\n')
	if err != nil {
		return "", err
	}

	text = strings.TrimSuffix(text, "\n")
	text = strings.TrimSuffix(text, "\r")
	if text == "" {
		return "", errors.New("Invalid input.")
	}
	return text, nil
}
