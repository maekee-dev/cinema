//PAGINATION 
const paginationNumbers = document.getElementById("pagination-numbers")
const paginatedList = document.getElementById("paginated-list")
const listItems = paginatedList.querySelectorAll(".cinema-item")

let paginationLimit = 7
if(window.screen.height <= 900) paginationLimit = 6
if(window.screen.height <= 800) paginationLimit = 5
const pageCount = Math.ceil(listItems.length / paginationLimit)
let currentPage = 1

const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("active")
        button.classList.add("cursor-scale")
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
        button.classList.add("active")
        }
    })
}

const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button")
    pageNumber.className = "pagination-number"
    pageNumber.innerHTML = index
    pageNumber.setAttribute("page-index", index)
    pageNumber.setAttribute("aria-label", "Page " + index)
    paginationNumbers.appendChild(pageNumber)
}

const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i)
    }
}

const setCurrentPage = (pageNum) => {
    currentPage = pageNum
    handleActivePageNumber()
    const prevRange = (pageNum - 1) * paginationLimit
    const currRange = pageNum * paginationLimit
    listItems.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange && index < currRange) {
        item.classList.remove("hidden")
        }
    })
}

window.addEventListener("load", () => {
    getPaginationNumbers();
    setCurrentPage(1);
    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"))
        if (pageIndex) {
        button.addEventListener("click", () => {
            setCurrentPage(pageIndex)
        })
        }
    })
})

//SET STARS
const movies = document.querySelectorAll('.cinema-item')

const createStar = (index, size) => {
    const container = document.querySelector('.cinema-item-' + (index + 1) + ' .stars-imgs')
    const star = document.createElement('img')
    switch (size) {
        case 1:
            star.src = '/assets/img/full-star.png'
            break;
        case .25:
            star.src = '/assets/img/quarter-star.png'
            break;
        case .5:
            star.src = '/assets/img/half-star.png'
            break;
        case .75:
            star.src = '/assets/img/three-quarter-star.png'
            break;
        case 0:
            star.src = '/assets/img/empty-star.png'
            break;
    }
    container.appendChild(star)
}

movies.forEach((movie, index) => {
    const rating = Number(document.querySelector('.cinema-item-' + (index + 1) + ' .user-rating').innerHTML.split('/')[0])
    const filmFloor = Math.floor(rating)
    const filmModule = rating - filmFloor
    if(filmFloor == 5) for(let i = 0; i < 5; i++) createStar(index, 1)
    else{
        for(let i = 4; i >= 0; i--){
            if(filmFloor == i){
                for(let j = 0; j < i; j++) createStar(index, 1)
                if(filmModule == 0) for(let j = 0; j < (5 - i); j++) createStar(index, 0)
                else{
                    switch (filmModule) {
                        case .25:
                            createStar(index, .25)
                            for(let j = 0; j < (4 - i); j++) createStar(index, 0)
                            break;
                        case .5:
                            createStar(index, .5)
                            for(let j = 0; j < (4 - i); j++) createStar(index, 0)
                            break;
                        case .75:
                            createStar(index, .75)
                            for(let j = 0; j < (4 - i); j++) createStar(index, 0)
                            break;
                    }
                }
            }
        }
    }
})
