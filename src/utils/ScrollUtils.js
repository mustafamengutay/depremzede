export const resetLocation = () => {
    window.scrollTo({
        top: 0,
        left: 0,
    });
};

export const resetLocationSmoothly = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

export const scrollDownByPercentage = (percentage) => {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollDistance = (scrollHeight - windowHeight) * (percentage / 100);

    window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth',
    });
};