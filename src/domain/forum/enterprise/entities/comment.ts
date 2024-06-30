import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface CommentProps {
  authorId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export abstract class Comment<
  Props extends CommentProps,
> extends Entity<Props> {
  // abstract class -> cant be instanced, only if extended by another class
  get authorId() {
    return this.props.authorId
  }

  get content() {
    return this.props.content
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  //   static create(
  //     props: Optional<CommentProps, 'createdAt'>,
  //     id?: UniqueEntityID,
  //   ) {
  //     const comment = new Comment(
  //       {
  //         ...props,
  //         createdAt: props.createdAt ?? new Date(),
  //       },
  //       id,
  //     )

  //     return comment
  //   }
}
