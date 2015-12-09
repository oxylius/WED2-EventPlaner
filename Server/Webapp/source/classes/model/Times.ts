class Times {
    public begin: Date;
    public end: Date;

    constructor(
        begin,
        end
    ) {
            this.begin = new Date(begin);
            this.end = new Date(end);
    }

}

export = Times;