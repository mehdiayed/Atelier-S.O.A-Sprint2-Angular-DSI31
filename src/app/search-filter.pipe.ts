import { Pipe, PipeTransform } from '@angular/core';

//decorateur
@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

 // a chaque modification du caractere il vas appeler la fonction 'transforme'
  transform(list: any[], filterText: string): any {
    console.log("Transforming...");
    return list ? list.filter(item =>
    item.nomProduit.toLowerCase().includes(filterText)) : [];
    }

}
