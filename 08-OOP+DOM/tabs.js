class Tabs{
    static DEFAULT_ACTIVE_TAB = 0;

    constructor(rootElement, defaultActive = Tabs.DEFAULT_ACTIVE_TAB) {
        const [navElement, contentElement] = rootElement.children;

        this.rootElement = rootElement;
        this.navElements = Array.from(navElement.children);
        this.contentElements = Array.from(contentElement.children);


        this.makeStyles();
        this.makeEvents();
        this.makeTabActive(defaultActive);
    }

    makeEvents() {
        this.rootElement.addEventListener('click', e => this.onRootElClick(e))
    }

    onRootElClick (e) {
        if (e.target.classList.contains('nav-item')) {
            let clickedIndex = this.navElements.indexOf(e.target);

            this.hideTabActive()
            this.makeTabActive(clickedIndex);
        }
    }

    makeStyles() {
        this.contentElements.forEach((contentElement) => {
            contentElement.classList.add('content-item');
        })

        this.navElements.forEach((navElement) => {
            navElement.classList.add('nav-item');
        })
    }

    makeTabActive(index) {
        this.activeTabIndex = index;
        this.navElements[index].classList.add('nav-item-active');
        this.contentElements[index].classList.add('content-item-active');
    }

    hideTabActive(index) {
        this.navElements[this.activeTabIndex].classList.remove('nav-item-active');
        this.contentElements[this.activeTabIndex].classList.remove('content-item-active');
    }
}