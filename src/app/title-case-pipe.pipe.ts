import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipePipe implements PipeTransform {

  transform(value: String): any {


let preposition=["the","of"];
    if(!value)
    return null;
 let words=value.split(' ');
  
for( let i=0;i<words.length;i++){

  if(i>0 && preposition.includes(words[i])){
   words[i]=words[i].toLowerCase();
  }else{
    words[i]=words[i].substr(0,1).toUpperCase()+words[i].substr(1).toLowerCase();
  }
}
return words.join(' ');
  }
  
}

