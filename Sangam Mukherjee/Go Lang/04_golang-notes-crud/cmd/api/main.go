package main

import (
	"fmt"
	"log"
	"notes-api/internal/config"
	"notes-api/internal/db"
	"notes-api/internal/server"
)

func main() {
	cfg, err := config.Load()

	if err != nil {
		log.Fatalf("Config error")
	}

	client, _, err := db.Connect(cfg)
	if err != nil {
		log.Fatalf("DB error")
	}

	defer func() {
		if err := db.Disconnect(client); err != nil {
			log.Fatalf("mongo disconnect error", err)
		}
	}()

	router := server.NewRouter()

	addr := fmt.Sprintf(":%s", cfg.ServerPort)


	if err := router.Run(addr); err != nil {
		log.Fatalf("Server Failed")
	}
}
