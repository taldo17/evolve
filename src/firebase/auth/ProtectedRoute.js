import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ isAuthed, isLoading, ...props }) => {
  console.log('In ProtectedRoute isAuthed=', isAuthed, ' isLoading=', isLoading);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthed) {
    return <Redirect to='/signin' />
  }

  return (
    <Route {...props} />
  );
}
