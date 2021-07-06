import {useState, useEffect} from 'react';
import {addAuthListener} from './addAuthListener';
import {getCurrentUser} from './getCurrentUser';

export const useAuth = () => {
    const [authInfo, setAuthInfo] = useState(() => {
            const user = getCurrentUser();
            const isLoading = !user;
            const userDetails = {
                evolveUser: {profileImageLink: 'https://pixabay.com/photos/fish-coral-sea-underwater-reef-2580208/'},
                graphDetails: {
                    dataLabels: "dddggggg",
                    label1: "dddd",
                    label1Scores: []
                },
            };
            console.log('use-state called  user=', user, 'userDetails=', userDetails);
            return {isLoading, user, userDetails};
        }
    );

    useEffect(() => {
        const unsubscribe = addAuthListener(async user => {
            const userDetails = {
                evolveUser: {profileImageLink: 'https://pixabay.com/photos/fish-coral-sea-underwater-reef-2580208/'},
                graphDetails: {
                    dataLabels: "new data",
                    label1: "dddd",
                    label1Scores: []
                },
            };
            console.log('useEffect called  user=', user, 'userDetails=', userDetails);
            setAuthInfo(({isLoading: false, user,userDetails}));
        })
        return unsubscribe;
    }, []);
    return authInfo;
}
