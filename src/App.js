import React, { useState } from 'react'
import Counter from './Components/Counter'
import PostItem from './Components/PostItem'
import PostList from './Components/PostList'
import MyButton from './Components/UI/button/MyButton'
import MyInput from './Components/UI/input/MyInput'
import './Styles/App.css'

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'JavaScript',
            body: 'JavaScript - язык программирования',
        },

        {
            id: 2,
            title: 'JavaScript',
            body: 'JavaScript - язык программирования',
        },

        {
            id: 3,
            title: 'JavaScript',
            body: 'JavaScript - язык программирования',
        },
    ])

    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, { ...post, id: Date.now() }])
        setPost({ title: '', body: '' })
    }

    return (
        <div className='App'>
            <form>
                <MyInput
                    value={post.title}
                    onChange={(e) =>
                        setPost({ ...post, title: e.target.value })
                    }
                    type='text'
                    placeholder='Название поста'
                ></MyInput>
                <MyInput
                    value={post.body}
                    onChange={(e) => setPost({ ...post, body: e.target.value })}
                    type='text'
                    placeholder='Описание поста'
                ></MyInput>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>

            <PostList
                posts={posts}
                key={posts.id}
                title='Список постов про JS'
            />
        </div>
    )
}

export default App
