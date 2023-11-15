import React from "react";

interface UIFetcherButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  isLoading: boolean;
  message?: string;
  loadingMessage?: string;
}

/**
 * * UIFetcherButton — кнопка для использвоания с fetcher
 *  - содержит состоняние для отображения загрузки запроса fetcher
 */
export const UIFetcherButton: React.FC<UIFetcherButtonProps> = ({
  type = "submit",
  className = "",
  isLoading,
  message = "Submit",
  loadingMessage = "Loading...",
}) => {
  return (
    <button type={type} disabled={isLoading} className={`vd rj ek rc rg gh lk ml il _l gi hi ${className}`}>
      {isLoading ? loadingMessage : message}
    </button>
  );
};
