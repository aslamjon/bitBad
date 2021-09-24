const addDetectClick = ({setDropDonw, classes=[]}) => {
    window.addEventListener('click', function (e) {
        if (!classes.some(item => e.target.classList.contains(item)))
        setDropDonw(false);
    })
}

const removeDetectClick = () => {
    window.removeEventListener('click', addDetectClick, false);
}

export { addDetectClick, removeDetectClick }