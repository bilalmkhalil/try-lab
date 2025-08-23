# Chat module — Features

## Left-side filters
- All — shows every conversation sorted by recent activity.
- Unread — only conversations with unread messages.
- Requests — message requests from users not in contacts.
- Pinned — manually pinned conversations.
- Mentions — conversations containing unread @mentions.
- Archived — archived conversations.
- Muted — muted conversations (notifications off).
- Favorites — starred or favorited contacts.
- Groups — group conversations only.
- Bots — system/automated chats.

## Core features
- Real-time messaging with typing indicators and read receipts.
- Message reactions (emoji), threaded replies, and quoting.
- Rich media support: images, files, audio, video, GIFs, stickers, link previews.
- Message search (global + per-conversation) with filters (date, sender, has media).
- Compose: inline reply, edit, delete, forward, pin, and star messages.
- Group management: create groups, roles, add/remove members, group settings.
- Presence/status (online/away/Do Not Disturb).
- Per-conversation notification settings and global preferences.
- Privacy controls: block/report user, toggle read receipts, handle message requests.
- Attachment preview, download, and size limits.
- Offline support with message queueing and sync.
- Export conversation (JSON/HTML/Markdown).
- Multi-select & bulk actions (delete, archive, mark read/unread).
- Optional end-to-end encryption.
- Optional translation and message summarization.
- Accessibility: keyboard navigation, screen-reader support.

## UI/UX notes
- Left filters show counts and support quick actions (right-click / long-press).
- Filters are customizable and reorderable.
- Search bar with quick filter chips (Has media, From contacts, Last 7 days).
- Lazy-load conversation history with infinite scroll.
- Responsive layout: collapsible side panel on small screens.

## APIs & integrations
- WebSocket/Socket for real-time events; REST APIs for history, users, attachments.
- Push notifications via FCM / APNs.
- Optional third-party integrations (bots, CRM, cloud storage).
- Developer/debug hooks: event tracing, message logs, ws health checks.