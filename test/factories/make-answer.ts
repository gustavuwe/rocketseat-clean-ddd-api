import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Answer, AnswerProps } from '@/domain/forum/enterprise/entities/answer'

export function makeAnswer(
  override: Partial<AnswerProps> = {},
  id?: UniqueEntityID,
) {
  // partial get all options from interface and convert to a optional Parameter.
  const answer = Answer.create(
    {
      authorId: new UniqueEntityID().toString(),
      questionId: new UniqueEntityID().toString(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return answer
}
