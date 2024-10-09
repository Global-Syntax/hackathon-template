"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Trash2 } from "lucide-react";
import Heading from "@/components/ui/heading";
import Bounded from "@/components/ui/bounded";

interface Comment {
  id: number;
  username: string;
  avatarUrl: string;
  text: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      username: "JohnDoe",
      avatarUrl: "https://github.com/shadcn.png",
      text: "Great post!",
    },
    {
      id: 2,
      username: "JaneSmith",
      avatarUrl: "https://github.com/shadcn.png",
      text: "I agree, very informative.",
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = () => {
    if (newComment.trim()) {
      const newId =
        comments.length > 0 ? Math.max(...comments.map((c) => c.id)) + 1 : 1;
      setComments([
        ...comments,
        {
          id: newId,
          username: "CurrentUser", // In a real app, this would be the logged-in user
          avatarUrl: "/placeholder.svg?height=40&width=40",
          text: newComment.trim(),
        },
      ]);
      setNewComment("");
      setIsCreating(false);
    }
  };

  const handleEdit = (id: number) => {
    const comment = comments.find((c) => c.id === id);
    if (comment) {
      setEditingId(id);
      setEditText(comment.text);
    }
  };

  const handleSaveEdit = () => {
    if (editingId !== null) {
      setComments(
        comments.map((c) => (c.id === editingId ? { ...c, text: editText } : c))
      );
      setEditingId(null);
      setEditText("");
    }
  };

  const handleDelete = (id: number) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  const handleCancel = () => {
    setNewComment("");
    setIsCreating(false);
  };

  return (
    <Bounded>
      <div className="w-full max-w-6xl mx-auto space-y-6">
        <Heading size="md" title="Comments" tag="h2" />
        {!isCreating ? (
          <Button onClick={() => setIsCreating(true)}>Create Comment</Button>
        ) : (
          <div className="space-y-2">
            <Textarea
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[100px]"
            />
            <div className="space-x-2">
              <Button onClick={handleSubmit}>Post Comment</Button>
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </div>
        )}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex space-x-4 bg-secondary p-4 rounded-lg"
            >
              <Avatar>
                <AvatarImage src={comment.avatarUrl} alt={comment.username} />
                <AvatarFallback>{comment.username[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-grow space-y-2">
                <div className="font-semibold">{comment.username}</div>
                {editingId === comment.id ? (
                  <div className="space-y-2">
                    <Textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="min-h-[60px] bg-slate-50"
                    />
                    <Button onClick={handleSaveEdit} size="sm">
                      Save
                    </Button>
                  </div>
                ) : (
                  <div>{comment.text}</div>
                )}
              </div>
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-0 right-0 z-10"
                  onClick={() => handleEdit(comment.id)}
                >
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-0 right-8 z-10"
                  onClick={() => handleDelete(comment.id)}
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
}
