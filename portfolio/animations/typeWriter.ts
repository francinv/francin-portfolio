let i = 0;
const speed = 50;

export function typeWriter(
        command: string, 
        setText: (text: string) => void, 
        text: string, 
        setAboutVisibile: React.Dispatch<React.SetStateAction<boolean>>) {
    const fullTerminalText = "(base) francinvincent@Francins-MBP ~ % cat aboutFrancin.json";
    if (i < command.length) {
        setText(text += command.charAt(i));
        i++;
        setTimeout(() => typeWriter(command, setText, text, setAboutVisibile), speed);
    }
    if (i === command.length) {
        if (fullTerminalText === text) {
            setAboutVisibile(true);
        } else {
            setTimeout(() => {
                setAboutVisibile(true);
            }, 350);
        }
    }
}