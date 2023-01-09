import React from 'react'
import { View } from 'react-native'
import { RepositoryList } from 'components/RepositoryList'
import { AppBar } from 'components/AppBar'
import { Route, Routes } from 'react-router-native'
import { Login } from 'pages/Login'

const Main = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />}></Route>
        <Route path="/singin" element={<Login />}></Route>
      </Routes>
    </View>
  )
}

export { Main }
