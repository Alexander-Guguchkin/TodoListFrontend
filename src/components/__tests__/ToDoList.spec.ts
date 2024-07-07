import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ToDoList from '@/views/ToDoList.vue'

describe('ToDoList', () => {
  it('должна вызывать createTask и добавлять задачу', async () => {
    const wrapper = mount(ToDoList)
    // Предположим, что createTask вызывается при нажатии на кнопку 'add-task-button'.
    await wrapper.find('button').trigger('click')

    // Проверяем, что событие 'task-created' было вызвано.
    expect(wrapper.emitted()).toHaveProperty('createTask')

    // Проверяем, что задача была добавлена в список задач.
    // Это предполагает, что у компонента есть свойство 'tasks', которое является массивом.
    expect(wrapper.vm.tasks).toContainEqual(expect.anything())
  })
})
