interface Response {
  ok: boolean;
  result: {
    code: string;
    full_short_link: string;
    full_short_link2: string;
    original_link: string;
    short_link: string;
    short_link2: string;
    share_link: string;
    share_link2: string;
    warning: string;
  };
}

export default function LinkUrl({ response }: { response: Response }) {
  return (
    <div>
      {response.result && (
        <div className="">
          <div className="">
            <p className="">{response.result.original_link}</p>
            <p className="text-primary-cyan text-sm font-medium">
              {response.result.full_short_link}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
