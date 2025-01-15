import scrollIntoView from 'smooth-scroll-into-view-if-needed';

export const useSmoothScroll = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      scrollIntoView(element, {
        scrollMode: 'if-needed',
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
        duration: 800,
      });
    }
  };

  return { scrollToSection };
};
