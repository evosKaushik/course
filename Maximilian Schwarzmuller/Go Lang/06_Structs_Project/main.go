package main

import (
	"bufio"
	"errors"
	"fmt"
	"os"
	"strings"

	"example.com/notes/note"
)

func main() {
	fmt.Println("Welcome to notes taking app")

	title, content, err := getNoteData()
	if err != nil {
		fmt.Println(err)
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
	err = userNote.Save()

	if err != nil {
		fmt.Println("Saving the note failed.")
		return
	}

	fmt.Println("Saving the note succeeded!")
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
