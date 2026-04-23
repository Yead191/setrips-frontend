"use client"
import React, { useState } from 'react';
import { DetailedTour } from '@/types/tour';
import { Check, Info, AlertTriangle, Clock, MapPin, Footprints } from 'lucide-react';

interface TourContentProps {
  tour: DetailedTour;
}

const TABS = [
  { id: 'highlights', label: 'HIGHLIGHTS' },
  { id: 'inclusions', label: 'INCLUSIONS' },
  { id: 'description', label: 'DESCRIPTION' },
  { id: 'schedule', label: 'SCHEDULE' },
];

const TourContent = ({ tour }: TourContentProps) => {
  const [activeTab, setActiveTab] = useState('highlights');

  return (
    <div className="flex flex-col gap-6">
      {/* Quick Info Bar */}
      <div className="bg-muted border border-border rounded-lg p-6 flex flex-wrap gap-8 items-center text-sm font-medium">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary" />
          <span>{tour.overview.duration.label?.toUpperCase() || `${tour.overview.duration.hours} HOURS`}</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-primary" />
          <span>{tour.meeting_point.name.toUpperCase()}</span>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary" />
          <span>CHECK IN AT {tour.overview.duration.checkin_time}</span>
        </div>
        <div className="flex items-center gap-3">
          <Footprints className="w-5 h-5 text-primary" />
          <span>MINIMAL WALKING</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-border mobile-tab">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 text-sm font-bold tracking-wider whitespace-nowrap transition-colors ${activeTab === tab.id
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-4">
        {activeTab === 'highlights' && (
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 uppercase">Highlights</h3>
            {tour.reviews?.summary && (
              <div className="flex items-center gap-2 mb-4 text-green-600 font-semibold">
                <Check className="w-5 h-5" />
                <span>Rated {tour.reviews.summary.average_rating} out of 5 on TripAdvisor</span>
              </div>
            )}
            <ul className="space-y-3">
              {tour.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-foreground/80 leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'inclusions' && (
          <div className="grid md:grid-cols-2 gap-6 bg-muted/50 rounded-lg p-6">
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">What's Included:</h3>
              <ul className="space-y-3">
                {tour.inclusions_summary.map((inclusion, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-foreground/80 leading-relaxed">{inclusion}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">What's Excluded:</h3>
              <ul className="space-y-3">
                {tour.exclusions_summary.map((exclusion, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-bold text-muted-foreground shrink-0 w-5 text-center mt-0.5">-</span>
                    <span className="text-foreground/80 leading-relaxed">{exclusion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'description' && (
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 uppercase">Description</h3>
            <div className="prose max-w-none text-foreground/80 whitespace-pre-wrap">
              {tour.description}
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 uppercase">Itinerary</h3>
            <div className="relative border-l-2 border-primary/20 ml-3 space-y-6">
              {tour.itinerary.map((item, idx) => (
                <div key={idx} className="relative pl-6">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5" />
                  <div className="font-bold text-primary">{item.time}</div>
                  <div className="text-foreground/80">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Important Notices */}
      {tour.important_notices?.length > 0 && (
        <div className="space-y-4 mt-4">
          <h3 className="text-xl font-bold">Important Information</h3>
          {tour.important_notices.map((notice, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg flex gap-3 ${notice.type === 'warning' ? 'bg-orange-100 text-orange-900 border border-orange-200' :
                notice.type === 'closure' ? 'bg-red-50 text-red-900 border border-red-200' :
                  'bg-blue-50 text-blue-900 border border-blue-200'
                }`}
            >
              {notice.type === 'warning' || notice.type === 'closure' ? (
                <AlertTriangle className="w-6 h-6 shrink-0" />
              ) : (
                <Info className="w-6 h-6 shrink-0" />
              )}
              <p className="text-sm leading-relaxed">{notice.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TourContent;
