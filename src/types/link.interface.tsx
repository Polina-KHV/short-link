export interface ILink {
  id: string,
  short?: string,
  shortTitle?: string,
  target?: string,
  targetTitle?: string,
  counter?: string,
  counterTitle?: string
};

export interface ILinkData extends  Omit<ILink, 'id'> {};