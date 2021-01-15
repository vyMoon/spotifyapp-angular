export interface IUser {
  display_name: string,
  external_urls: {[key:string]: string}[],
  followers: any,
  id: string,
  images: any,
  url: string,
  type: string,
  href: string,
}