export default function QuestionContent({ name, content }) {
    return (
      <div>
      <div className="p-4">
        <div className="flex gap-4">
          <div>
            <p className="font-semibold text-gray-800">{name}</p>
          </div>
        </div>
        <div className="mt-6 text-gray-600">{content}</div>
      </div>
      </div>
    );
  }
  