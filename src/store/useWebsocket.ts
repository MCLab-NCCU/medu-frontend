import { create } from "zustand";

// 定義狀態的類型
interface WebSocketState {
  socket: WebSocket | null;
  messages: string[];
  connect: (url: string) => void;
}

// 建立 WebSocket store
export const useWebSocketStore = create<WebSocketState>((set) => ({
  socket: null,
  messages: [],
  connect: (url: string) => {
    const ws = new WebSocket(url);

    ws.onopen = () => console.log("WebSocket connection opened");
    ws.onclose = () => console.log("WebSocket connection closed");
    ws.onerror = (error) => console.error("WebSocket error", error);

    ws.onmessage = (event) => {
      set((state) => ({
        messages: [...state.messages, event.data], // 明確地處理 state
      }));
    };

    set({ socket: ws });
  },
}));
