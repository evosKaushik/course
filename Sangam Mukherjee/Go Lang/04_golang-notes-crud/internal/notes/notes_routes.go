package notes

import (
	"fmt"
	"notes-api/internal/config"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/v2/mongo"
)

func RegisterRoutes(r *gin.Engine, db *mongo.Database) {
	cfg, err := config.Load()
	if err != nil {
		fmt.Println(err)
		return
	}
	repo := NewRepo(db, cfg.MongoDB)

	h := NewHandler(repo)

	notesGroup := r.Group("/notes")
	{
		notesGroup.POST("", h.CreateNote)
	}
}
