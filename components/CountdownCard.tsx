type CountdownProps = {
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  calendarUrl: string;
};

export default function CountdownCard({ countdown, calendarUrl }: CountdownProps) {
  const countdownItems = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ];

  return (
    <div className="content-card countdown-card">
      <div className="countdown-title reanimate fade">ALMOST TIME FOR OUR CELEBRATION</div>
      <div className="countdown-grid">
        {countdownItems.map((item, index) => (
          <div
            key={item.label}
            className={`countdown-box reanimate up delay-${Math.min(index + 2, 6)}`}
          >
            <span>{item.value}</span>
            <small>{item.label}</small>
          </div>
        ))}
      </div>
      <a
        className="pill-button reanimate fade delay-6"
        href={calendarUrl}
        target="_blank"
        rel="noreferrer"
      >
        SAVE THE DATE
      </a>
    </div>
  );
}
