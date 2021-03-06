import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from '../screens/IndexScreen';
import BlogDetails from '../screens/BlogDetailsScreen';
import CreateBlog from '../screens/CreateBlogScreen';
import EditBlog from '../screens/EditBlogScreen';



const Stack = createStackNavigator();

function StackNavigator() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Index" component={IndexScreen} options={{ title: "My Blog Posts" }}/>
        <Stack.Screen name="Details" component={BlogDetails} options={{ title: "Blog Post Details" }}/>
        <Stack.Screen name="Create" component={CreateBlog} options={{ title: "Create a New Blog Post" }}/>
        <Stack.Screen name="Edit" component={EditBlog} options={{ title: "Edit Blog Post" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default StackNavigator;