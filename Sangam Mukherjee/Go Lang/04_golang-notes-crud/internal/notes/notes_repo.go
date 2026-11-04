package notes

import (
	"context"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/v2/mongo"
)

// Repo -> data access layer for notes

type Repo struct {
	coll *mongo.Collection
}

func NewRepo(db *mongo.Database, collectionName string) *Repo {
	return &Repo{
		coll: db.Collection("notes"),
	}
}

func (r *Repo) Create(ctx context.Context, note Note) (Note, error) {
	opCtx, cancel := context.WithTimeout(ctx, 5*time.Second)

	defer cancel()

	_, err := r.coll.InsertOne(opCtx, note)

	if err != nil {
		return Note{}, fmt.Errorf("failed to create note: %w", err)
	}

	return note, nil
}
