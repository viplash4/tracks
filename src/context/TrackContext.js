import createDataContext from "./createDataContext";
import trackerApi from '../api';



const trackReducer = (state, action) => {
    switch (action.type){
        default:
            return state;
    }
};

const fetchTracks = dispatch => () => {

};

const createTrack = dispatch => (name, locations) => {

};

export const {Provider, Context} = createDataContext(
    trackReducer, {fetchTracks, createTrack},
    []
);