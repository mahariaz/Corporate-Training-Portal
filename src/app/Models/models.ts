export interface Course{
    _id:string,
    courseName:string,
    overview:string,
    startDate:string,
    endDate:string,
    crHrs:string,
    price:string,
    material: {
        [file: string]: any
    }
}
export interface User{
    _id:string,
    username:string,
    email:string,
    password:string
    

}