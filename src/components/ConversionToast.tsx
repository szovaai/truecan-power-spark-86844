import { useEffect } from "react";
import { toast } from "sonner";

const messages = [
  { name: "Jason", location: "NE Calgary", action: "booked a safety check" },
  { name: "Sarah", location: "Airdrie", action: "requested a panel upgrade" },
  { name: "Mike", location: "Chestermere", action: "scheduled an EV charger install" },
  { name: "Jennifer", location: "Cochrane", action: "booked emergency service" },
  { name: "David", location: "SW Calgary", action: "requested a quote" },
];

const ConversionToast = () => {
  useEffect(() => {
    const showToast = () => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      toast(
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
            {randomMessage.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-sm">
              {randomMessage.name} ({randomMessage.location})
            </p>
            <p className="text-xs text-muted-foreground">
              just {randomMessage.action}
            </p>
          </div>
        </div>,
        {
          duration: 4000,
          position: "bottom-left",
        }
      );
    };

    // Show first toast after 10 seconds
    const firstTimeout = setTimeout(showToast, 10000);

    // Then show every 45-60 seconds
    const interval = setInterval(() => {
      showToast();
    }, Math.random() * 15000 + 45000); // Random between 45-60 seconds

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  return null;
};

export default ConversionToast;
