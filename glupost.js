const accessKey = 'PLEASE INSERT YOUR API KEY';
let index=0
let url=[]

function getImage(){
    
    const imageName=document.querySelector('input').value;
fetch('https://api.unsplash.com/search/photos?query=' + imageName + '&client_id=' + accessKey)
  .then(response => response.json())
  .then(data => {
index=0
    document.querySelector('img').src=data.results[0].urls.regular;


    for(let i=0; i<data.results.length; i++){
      url[i]=data.results[i].urls.regular;

    }
  })
  .catch(error => {
    console.log('Error fetching random photo:', error);
  });
  
}

function goLeft(){

if(index===url.length-1){
  index=0
}else{
  index++
}
  document.querySelector('img').src=url[index];
}

function goRight(){

  if(index===0){
    index=url.length-1
  }else{
    index--
  }
    document.querySelector('img').src=url[index];
  }



