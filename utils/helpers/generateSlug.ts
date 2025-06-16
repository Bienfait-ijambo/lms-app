import slugify from "slugify";



export function generateSlug(stringVal:string){
  const  slug=slugify(stringVal);
  const random= Math.random().toString().slice(0,5)
  const slugToLowerCase=slug.toLowerCase()+'-'+random
  return slugToLowerCase
}