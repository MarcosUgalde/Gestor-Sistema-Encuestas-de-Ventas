INSERT INTO  users (
    email, username, password, edit_access
) VALUES (
    'user1@gmail.com', 'User 1', crypt('1234', '$2a$10$'), TRUE
);

INSERT INTO  users (
    email, username, password, edit_access
) VALUES (
    'user2@gmail.com', 'User 2', crypt('1234', '$2a$10$'), FALSE
)