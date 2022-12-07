export interface agent{
    id:number ;
    Name:string;
    Prenom: string;
    Email:string;
    Telephone:string;
}
 
export interface PageAgent{
    agent: agent[];
    page:number;
    size:number;
    totalPages:number;
}