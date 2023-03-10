export interface MotoProduct {
  id: number
  title: string
  price:number
  image: string
  link: string
  characteristics:{
    type: string
    max_speed: number
  }
  rating:{
    rate: number
    count: number
  }
}
