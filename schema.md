`users`
---
| Column name | Data type | Details |
|-------------|:---------:|--------:|
`id`|integer    | not null, primary key |
`username` | string |not null, indexed
`email` | string | not null, indexed, unique
`password_digest` | string | not null
`session_token` | string | not null, indexed, unique
`profile_pic` | url |
`organizer_description` | text |
`created_at` | datetime | not null
`updated_at` | datetime | not null
`facebook_url`| url | 
`twitter_url`| url |
---
`events`
---
| Column name | Data type | Details |
|-------------|:---------:|--------:|
`id`|integer    | not null, primary key
`event_name`|string|not null, indexed
`organizer_id`|integer|not null, indexed, unique to event_name
`date`|datetime|not null
`time`|datetime|not null
`location`|string|not null
`description`|text|not null
`price`|float|not null
`available`|boolean| default: true, not null
`event_type`|array |default: [], not null
`public` |boolean| default: true, not null
`created_at` | datetime | not null
`updated_at` | datetime | not null
---
*fields for event topic AND event type; event topic synonymous with category

`categories` aka tags
---
| Column name | Data type | Details |
|-------------|:---------:|--------:|
`id`|integer    | not null, primary key
`category`|string|not null, indexed, unique
`created_at` | datetime | not null
`updated_at` | datetime | not null
---
`taggings`
---
| Column name | Data type | Details |
|-------------|:---------:|--------:|
`category_id`|integer|not null, indexed, unique to event_id
`event_id`|integer|not null, indexed
`created_at` | datetime | not null
`updated_at` | datetime | not null
---
`registrations`
---
| Column name | Data type | Details |
|-------------|:---------:|--------:|
`event_id`|integer|not null, indexed
`attendee_id`|integer|not null, indexed
`created_at` | datetime | not null
`updated_at` | datetime | not null
---
`bookmarks`
---
| Column name | Data type | Details |
|-------------|:---------:|--------:|
`event_id`|integer|not null, indexed
`attendee_id`|integer|not null, indexed
`created_at` | datetime | not null
`updated_at` | datetime | not null
---
`followings`
---
| Column name | Data type | Details |
|-------------|:---------:|--------:|
`organizer_id`|integer|not null, primary key
`follower_id`|integer|not null, indexed
`created_at` | datetime | not null
`updated_at` | datetime | not null
---
