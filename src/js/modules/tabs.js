function tabs(tabsSelector, tabsContentSelector, tabsParentsSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentsSelector);

    function hideTabContent() {
        tabsContent.forEach(content => {
            content.classList.add('hide');
            content.classList.remove('show', 'fade');
    });

    tabs.forEach(tab => {
        tab.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((tab, i) => {
                if(target == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;