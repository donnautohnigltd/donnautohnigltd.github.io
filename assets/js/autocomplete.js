const icon = document.getElementById('search_icon')
let possibleSuggestions  =[
    "hakan plastik",
    "gf hakan plastik",
    "hakan",
    "plastik",
    "pipe",
    "pipes",
    "silenta premium soundproof pipe systems",
    "silenta pipe without socket",
    "silenta pipe with socket",
    "silenta 135 ventilation ebow",
    "silenta 45-67 branch",
    "silenta siphone elbow",
    "silenta 15-45 elbow",
    "silenta 67-87 elbow",
    "silenta socket",
    "silenta sleeve socket",
    "silenta long socket",
    "silenta 45 long elbow",
    "silenta parallel branch",
    "silenta 87 branch",
    "silenta 87 double branch",
    "silenta reducer",
    "silenta access pipe",
    "silenta s siphon",
    "silenta floor trap",
    "silenta cap",
    "silenta pvc pp-hdpe connector",
    "silenta adaptor seal",
    "silenta sealed clamps",
    "corrugated piping systems hdpe and pp",
    "hdpe",
    "pp",
    "soundproof",
    "systems",
    "flexa",
    "crosslinked",
    "pex-b",
    "flexa crosslinked pex-b piping systems",
    "flexa pipe",
    "flexa pex-b crosslinked pipe with spiral cover",
    "spiral cover",
    "spiral pipe",
    "flexa pex-b crosslinked pipe with oxygen barrier",
    "flexa spiral pipe",
    "flexa male nipple",
    "flexa female nipple",
    "flexa male elbow",
    "flexa female elbow",
    "flexa female tee",
    "flexa male tee",
    "flexa equal elbow",
    "flexa record",
    "flexa inegal T",
    "flexa inegal bracket",
    "flexa equal nipple",
    "flexa nipple for radiator connection tubes",
    "flexa manuel for air outlet",
    "flexa wall plate elbow female",
    "flexa radiator valve",
    "flexa ball valve",
    "flexa nickel plated manifolds",
    "flexa pipe clip rails",
    "flexa double maniford bracket",
    "flexa connection elbow box plate",
    "flexa manifold cabin",
    "flexa radiator connection tubes",
    "flexa connection elbow box",
    "flexa corner conduit",
    "corner conduit",
]
let ul = document.getElementById('list')
// sort names in ascending order
let sortedNames = possibleSuggestions.sort();
// console.log(sortedNames);

// reference
let input = document.getElementById('input');

// execute function on keyup
input.addEventListener('keyup', (e)=>{
    // search side border
    if(input.value===''){
        icon.style.borderRight = 'transparent'
    }
    else{icon.style.borderRight = 'none'}
    // loop through the above array(suggestions);
        // initially remove all elements when input is erased oradds new letter then clean previous outputs
        removeElements();
        // convert input to lowercase and compare with each string
    for(let i of sortedNames){   
        if(i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value !=""){
            // create li element
            let listItem = document.createElement('li');
            // append list items into ul
            // ul.append(listItem)
            // one common classname

            listItem.classList.add('list-items')
            listItem.style.cursor = 'pointer'
            listItem.setAttribute('onclick',"displayNames('" + i + "')")
            // display matched part in bold
            let word = "<b>" + i.substr(0,input.value.length) + "</b>";
            word += i.substr(input.value.length);
            console.log(word)
            // display the value in array
            listItem.innerHTML  = word;
            document.querySelector('.list').appendChild(listItem);
        }
    }
})
function displayNames(value){
    input.value = value
}
function removeElements(){
    // clear all the items
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) =>{
        item.remove();
    })
}

    