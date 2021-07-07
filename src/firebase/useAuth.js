import {useState, useEffect} from 'react';
import {addAuthListener} from './addAuthListener';
import {getCurrentUser} from './getCurrentUser';
import firebase from 'firebase/app';

export const getUserDetails = async id => {
    const restaurantDoc = await firebase.firestore()
        .collection('users')
        .doc(id)
        .get();
    const userDetails = restaurantDoc.data();

    return {
        ...userDetails,
        id
    };
}

export const useAuth = () => {


    return {authInfo,userDetails};
}
