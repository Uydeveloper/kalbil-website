import { useParams } from "react-router-dom";
import MessageForm from "./MessageForm";

export default function EditMessagePage() {
  const { id } = useParams();
  // Load message by ID from context or backend
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">✏️ خەۋەرنى تەھرىرلەش</h2>
      <MessageForm editingId={id} />
    </div>
  );
}