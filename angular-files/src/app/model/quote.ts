export class Quote {
  /* 
  id!: number;
  quoteMessage!: string;
  quoteAuthor!: string;
  submittedBy!: string;
  */
  constructor(
    public id: number,
    public quoteMessage: string,
    public quoteAuthor: string,
    public submittedBy: string,
    public upVote: number,
    public downVote: number,
    public completeDate: Date
  );
}
