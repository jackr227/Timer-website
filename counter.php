<?php
$counterFile = 'counter.txt';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $count = intval(file_get_contents($counterFile));
    $count++;
    file_put_contents($counterFile, $count);
    echo $count;
} else {
    $count = intval(file_get_contents($counterFile));
    echo $count;
}
