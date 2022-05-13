export const parseCompetenceValue = (value: number): string => {
   const temp = value % 1;
    if (temp === 0.5) {
        return '50%';
    } else {
        return '100%';
    }
}
