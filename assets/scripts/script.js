var checkBox = document.querySelector("#checkedTheme")
checkBox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})