class BetterDate extends Date {
    public getUnixTimestamp(): number {
        return Math.floor(Date.now() / 1000);
    }
    public getFullMonth(): string {
        const jsMonth = this.getMonth() + 1;
        return `${jsMonth.toString().length === 1 ? "0" : ""}${jsMonth}`;
    }
    public getFullDate(): string {
        const jsDate = this.getDate();
        return `${jsDate.toString().length === 1 ? "0" : ""}${jsDate}`;
    }
}