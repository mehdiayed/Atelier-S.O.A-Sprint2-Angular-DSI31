import { Categorie } from "./categorie.model";

export class Produit {
    idProduit!: number;
    nomProduit!: string;
    prixProduit!: number;
    dateCreation!: Date;
    categorie!: Categorie;
}
 // la  point d'interrogation indique la attribu peu avoir un valeur ou nn 