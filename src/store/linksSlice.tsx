import { createSlice } from "@reduxjs/toolkit";
import { ILink } from "../types/link.interface";

const links: ILink[] = [];

export const linksSlice = createSlice({
  name: 'links',
  initialState: {links},
  reducers: {
    setLinks: (state, { payload }) => {
      state.links = payload;
    },
    sortLinks: (state, { payload }) => {
      if(payload === 'mostPopular') {
        state.links = state.links.sort((a, b) => 
          Number(b.counter) - Number(a.counter)
        )
      }
      else if (payload === 'lessPopular') {
        state.links = state.links.sort((a, b) => 
          Number(a.counter) - Number(b.counter)
        )
      }
      else if (payload === 'lexical') {
        state.links = state.links.sort((a, b) => {
          if(String(a.short) < String(b.short)) {return -1}
          else {return 0}
      })
      }
    },
    setLinkClick: (state, { payload }) => {
      let index = state.links.findIndex((link) =>
        link.short === payload
      );
      state.links[index].counter =
        String(Number(state.links[index].counter) + 1);
        console.log(state.links[index].counter)
    }
  }
});