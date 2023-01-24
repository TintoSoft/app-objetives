import React from 'react'
import { View } from 'react-native'
import { AppBar } from 'components/AppBar'
import { Route, Routes } from 'react-router-native'
import { Login } from 'pages/Login'
import { Home } from 'pages/Home'
import { ProgressList } from 'pages/ProgressList'

const Main = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/singin" element={<Login />}></Route>
        <Route path="/progresslist" element={<ProgressList />}></Route>
      </Routes>
    </View>
  )
}

export { Main }
